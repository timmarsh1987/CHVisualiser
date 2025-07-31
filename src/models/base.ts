import { ContentHubClient } from "@sitecore/sc-contenthub-webclient-sdk/dist/clients/content-hub-client";
import { IEntity } from "@sitecore/sc-contenthub-webclient-sdk/dist/contracts/base/entity";

export interface ContentHubProps {
    client: ContentHubClient; // We type the client so that we get intellisense for the different clients.
    entityId?: number;
    entity?: IEntity;
    userId?: number;
}
