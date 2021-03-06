"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
// Observable class extensions
require("rxjs/add/observable/of");
// Observable operators
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var warframe_search_service_1 = require("../services/warframe-search.service");
var WarframeSearchComponent = (function () {
    function WarframeSearchComponent(warframeSearchService, router) {
        this.warframeSearchService = warframeSearchService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
    }
    WarframeSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    WarframeSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.warframes = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) { return term ? _this.warframeSearchService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    WarframeSearchComponent.prototype.gotoDetail = function (warframe) {
        var link = ['/detail', warframe.id];
        this.router.navigate(link);
    };
    return WarframeSearchComponent;
}());
WarframeSearchComponent = __decorate([
    core_1.Component({
        selector: 'warframe-search',
        templateUrl: './styling/warframe-search.component.html',
        styleUrls: ['./styling/warframe-search.component.css'],
        providers: [warframe_search_service_1.WarframeSearchService]
    }),
    __metadata("design:paramtypes", [warframe_search_service_1.WarframeSearchService,
        router_1.Router])
], WarframeSearchComponent);
exports.WarframeSearchComponent = WarframeSearchComponent;
//# sourceMappingURL=warframe-search.component.js.map