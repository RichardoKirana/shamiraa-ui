import { Container } from 'aurelia-dependency-injection';
import { Config } from "aurelia-api";

const resource = 'cost-calculation-garments';

module.exports = function (keyword, filter) {

    var config = Container.instance.get(Config);
    var endpoint = config.getEndpoint("nsales");

    return endpoint.find(resource, { keyword: keyword, filter: JSON.stringify(filter) })
        .then(results => {
            return results.data;
        });
}
