import { EntityLoadConfiguration } from "@sitecore/sc-contenthub-webclient-sdk/dist/contracts/querying/entity-load-configuration";
import { ContentHubClient } from "@sitecore/sc-contenthub-webclient-sdk/dist/clients/content-hub-client";
import { IEntity } from "@sitecore/sc-contenthub-webclient-sdk/dist/contracts/base/entity";
import { IRelation } from "@sitecore/sc-contenthub-webclient-sdk/dist/contracts/base/relation";

export const loadReletionsFromEntity = async (client: ContentHubClient, entityId: number, connection: string) => {
    const entity = await client.entities.getAsync(entityId, EntityLoadConfiguration.Full.builder().withRelations([connection]).build()) as IEntity;
    const relations = entity.relations.find((z) => z.name === connection) as IRelation;
    // Check if relations is undefined and return a safe default if so
    if (!relations) {
        console.error(`No relations found for connection: ${connection}`);
        // Return an object that mimics the structure of IRelation with an empty getIds method
        return { getIds: () => [] };
    }
    return relations;
}