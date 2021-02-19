import { html } from "lit-html";
import { Route, SLUG_REGEX, ID_REGEX, UUID_REGEX } from "./elements/router/Route";

import "./pages/admin-overview/AdminOverviewPage";
import "./pages/applications/ApplicationListPage";
import "./pages/applications/ApplicationViewPage";
import "./pages/crypto/CertificateKeyPairListPage";
import "./pages/events/EventInfoPage";
import "./pages/events/EventListPage";
import "./pages/events/RuleListPage";
import "./pages/events/TransportListPage";
import "./pages/flows/FlowListPage";
import "./pages/flows/FlowViewPage";
import "./pages/LibraryPage";
import "./pages/outposts/OutpostListPage";
import "./pages/outposts/OutpostServiceConnectionListPage";
import "./pages/policies/PolicyListPage";
import "./pages/property-mappings/PropertyMappingListPage";
import "./pages/providers/ProviderListPage";
import "./pages/providers/ProviderViewPage";
import "./pages/sources/SourcesListPage";
import "./pages/sources/SourceViewPage";
import "./pages/groups/GroupListPage";
import "./pages/users/UserListPage";
import "./pages/tokens/TokenListPage";
import "./pages/system-tasks/SystemTaskListPage";

export const ROUTES: Route[] = [
    // Prevent infinite Shell loops
    new Route(new RegExp("^/$")).redirect("/library"),
    new Route(new RegExp("^#.*")).redirect("/library"),
    new Route(new RegExp("^/library$"), html`<ak-library></ak-library>`),
    new Route(new RegExp("^/administration/overview$"), html`<ak-admin-overview></ak-admin-overview>`),
    new Route(new RegExp("^/administration/system-tasks$"), html`<ak-system-task-list></ak-system-task-list>`),
    new Route(new RegExp("^/providers$"), html`<ak-provider-list></ak-provider-list>`),
    new Route(new RegExp(`^/providers/(?<id>${ID_REGEX})$`)).then((args) => {
        return html`<ak-provider-view .providerID=${parseInt(args.id, 10)}></ak-provider-view>`;
    }),
    new Route(new RegExp("^/applications$"), html`<ak-application-list></ak-application-list>`),
    new Route(new RegExp(`^/applications/(?<slug>${SLUG_REGEX})$`)).then((args) => {
        return html`<ak-application-view .args=${args}></ak-application-view>`;
    }),
    new Route(new RegExp("^/sources$"), html`<ak-source-list></ak-source-list>`),
    new Route(new RegExp(`^/sources/(?<slug>${SLUG_REGEX})$`)).then((args) => {
        return html`<ak-source-view .args=${args}></ak-source-view>`;
    }),
    new Route(new RegExp("^/policies$"), html`<ak-policy-list></ak-policy-list>`),
    new Route(new RegExp("^/groups$"), html`<ak-group-list></ak-group-list>`),
    new Route(new RegExp("^/users$"), html`<ak-user-list></ak-user-list>`),
    new Route(new RegExp("^/flows$"), html`<ak-flow-list></ak-flow-list>`),
    new Route(new RegExp("^/tokens$"), html`<ak-token-list></ak-token-list>`),
    new Route(new RegExp(`^/flows/(?<slug>${SLUG_REGEX})$`)).then((args) => {
        return html`<ak-flow-view .flowSlug=${args.slug}></ak-flow-view>`;
    }),
    new Route(new RegExp("^/events/log$"), html`<ak-event-list></ak-event-list>`),
    new Route(new RegExp(`^/events/log/(?<id>${UUID_REGEX})$`)).then((args) => {
        return html`<ak-event-info-page .args=${args}></ak-event-info-page>`;
    }),
    new Route(new RegExp("^/events/transports$"), html`<ak-event-transport-list></ak-event-transport-list>`),
    new Route(new RegExp("^/events/rules$"), html`<ak-event-rule-list></ak-event-rule-list>`),
    new Route(new RegExp("^/property-mappings$"), html`<ak-property-mapping-list></ak-property-mapping-list>`),
    new Route(new RegExp("^/outposts$"), html`<ak-outpost-list></ak-outpost-list>`),
    new Route(new RegExp("^/outpost-service-connections$"), html`<ak-outpost-service-connection-list></ak-outpost-service-connection-list>`),
    new Route(new RegExp("^/crypto/certificates$"), html`<ak-crypto-certificatekeypair-list></ak-crypto-certificatekeypair-list>`),
];
