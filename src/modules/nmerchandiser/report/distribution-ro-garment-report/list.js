import { inject, bindable } from 'aurelia-framework';
import { Service } from "./service";
import { Router } from 'aurelia-router';
import moment from 'moment';
var UnitLoader = require('../../../../loader/garment-units-loader');

@inject(Router, Service)
export class List {
    
    constructor(router, service) {
        this.service = service;
        this.router = router;
        this.today = new Date();
    }
   
    unitName=null;
    dateFrom = null;
    dateTo = null;

    get unitLoader() {
        return UnitLoader;
    }

    activate() {
       
    }

    searching() {
        var info = {
            dateFrom : this.dateFrom,
            dateTo : this.dateTo,
        }
        if (this.unitName) {
           info.unitName = this.unitName.Name
        }
        this.service.search(JSON.stringify(info))
            .then(result => {
                this.data = result;
                console.log(result);

                var datas = [];
                for (var item of this.data){
                    item.DistributionDate=moment(item.DistributionDate).format("DD MMM YYYY")=="01 Jan 1970" ? "-" : moment(item.DistributionDate).format("DD MMM YYYY");                     
                    datas.push(item);
                }
                this.data = datas;

                });        
    }
          
    ExportToExcel() {
        var info = {
            dateFrom : this.dateFrom,
            dateTo : this.dateTo,
        }
        if (this.unitName) {
           info.unitName = this.unitName.Name
        }
        this.service.generateExcel(JSON.stringify(info));
    }

    reset() {
        this.dateFrom = null;
        this.dateTo = null;
        this.unitName = null;
        this.data = [];
    }

    dateFromChanged(e) {
        var _startDate = new Date(e.srcElement.value);
        var _endDate = new Date(this.dateTo);

        if (_startDate > _endDate)
            this.dateTo = e.srcElement.value;
    } 
}