import {ExtendedRecordMap} from "notion-types";
import {getPageTitle} from "notion-utils";
import notion from "../lib/notion";

const mapId = (id) => id?.replace(/-/g, '');

export async function getAllPages(recordMap?: ExtendedRecordMap, id?: string, activeId?: string) {
    if (!recordMap) return [];

    const values = Object.values(recordMap.block);
    const pages = values
        .filter(block => block?.value?.type === 'page')
        .filter(block => {
            return mapId(block?.value?.parent_id) === mapId(id)
        });

    const result = await Promise.all(pages
        .map(async (block): Promise<any> => {
            const page = await notion.getPage(block.value.id);
            const title = await getPageTitle(page)
            const children = await getAllPages(page, block.value.id, activeId);
            return await {
                id: block.value.id,
                title: title,
                block: block.value,
                children: children,
                icon: block.value?.format?.page_icon ?? null,
                active: mapId(block.value.id) === mapId(activeId)
            };
        })
    );

    return result.filter(page => !!page?.title);
}
