import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { CIQ } from 'chartiq/js/chartiq';

/**
 * This sample component is minimal chart display without UI components
 */
@Component({
	selector: 'cq-hello-world',
	templateUrl: './hello-world.component.html',
	styleUrls: ['./hello-world.component.scss'],
})
export class HelloWorldComponent implements AfterViewInit {
	@ViewChild('chartContainer', { static: true }) chartContainer: ElementRef;

	constructor() {}

	ngAfterViewInit() {
		const container = this.chartContainer.nativeElement;

		const ciq = new CIQ.ChartEngine({ container });

		ciq.loadChart('SPY', {
			// masterData: sample5min, 
			masterData:  this.getMasterData(),
			periodicity: {
				period: 1,
				interval: 1,
				timeUnit: 'minute',
			},
		});
	}

	getMasterData() {
		const masterData = [
			{
				Date: '20200120093000000',
				Close: 20.7657,
				Volume: 7047690,
				Open: 20.59,
				High: 20.84,
				Low: 19.89,
				DT: '2020-01-20T14:30:00.000Z',
				displayDate: '2020-01-20T14:30:00.000Z',
			},
			{
				Date: '20200120093500000',
				Close: 20.7932,
				Volume: 6172920,
				Open: 20.7657,
				High: 21.45,
				Low: 20.4948,
				DT: '2020-01-20T14:35:00.000Z',
				displayDate: '2020-01-20T14:35:00.000Z',
			},
			{
				Date: '20200120094000000',
				Close: 21.5331,
				Volume: 4942080,
				Open: 20.7932,
				High: 22.23,
				Low: 19.99,
				DT: '2020-01-20T14:40:00.000Z',
				displayDate: '2020-01-20T14:40:00.000Z',
			},
			{
				Date: '20200120094500000',
				Close: 21.24,
				Volume: 4057950,
				Open: 21.5331,
				High: 22.29,
				Low: 21.24,
				DT: '2020-01-20T14:45:00.000Z',
				displayDate: '2020-01-20T14:45:00.000Z',
			},
			{
				Date: '20200120095000000',
				Close: 20.74,
				Volume: 5780580,
				Open: 21.24,
				High: 21.28,
				Low: 20.62,
				DT: '2020-01-20T14:50:00.000Z',
				displayDate: '2020-01-20T14:50:00.000Z',
			},
			{
				Date: '20200120095500000',
				Close: 20.33,
				Volume: 7761000,
				Open: 20.74,
				High: 21.14,
				Low: 19.4,
				DT: '2020-01-20T14:55:00.000Z',
				displayDate: '2020-01-20T14:55:00.000Z',
			},
			{
				Date: '20200120100000000',
				Close: 20.86,
				Volume: 4378530,
				Open: 20.33,
				High: 21.24,
				Low: 20.02,
				DT: '2020-01-20T15:00:00.000Z',
				displayDate: '2020-01-20T15:00:00.000Z',
			},
			{
				Date: '20200120100500000',
				Close: 21.42,
				Volume: 6995040,
				Open: 20.86,
				High: 22.32,
				Low: 20.66,
				DT: '2020-01-20T15:05:00.000Z',
				displayDate: '2020-01-20T15:05:00.000Z',
			},
			{
				Date: '20200120101000000',
				Close: 20.5186,
				Volume: 4527120,
				Open: 21.42,
				High: 22.01,
				Low: 19.9638,
				DT: '2020-01-20T15:10:00.000Z',
				displayDate: '2020-01-20T15:10:00.000Z',
			},
			{
				Date: '20200120101500000',
				Close: 20.69,
				Volume: 4870320,
				Open: 20.5186,
				High: 21.1,
				Low: 19.8264,
				DT: '2020-01-20T15:15:00.000Z',
				displayDate: '2020-01-20T15:15:00.000Z',
			},
			{
				Date: '20200120102000000',
				Close: 20.71,
				Volume: 4601610,
				Open: 20.69,
				High: 20.84,
				Low: 20.31,
				DT: '2020-01-20T15:20:00.000Z',
				displayDate: '2020-01-20T15:20:00.000Z',
			},
			{
				Date: '20200120102500000',
				Close: 20.21,
				Volume: 5878470,
				Open: 20.71,
				High: 21.23,
				Low: 19.64,
				DT: '2020-01-20T15:25:00.000Z',
				displayDate: '2020-01-20T15:25:00.000Z',
			},
			{
				Date: '20200120103000000',
				Close: 19.76,
				Volume: 6029400,
				Open: 20.21,
				High: 20.41,
				Low: 19.15,
				DT: '2020-01-20T15:30:00.000Z',
				displayDate: '2020-01-20T15:30:00.000Z',
			},
			{
				Date: '20200120103500000',
				Close: 19.4149,
				Volume: 4672980,
				Open: 19.76,
				High: 20.46,
				Low: 19.19,
				DT: '2020-01-20T15:35:00.000Z',
				displayDate: '2020-01-20T15:35:00.000Z',
			},
			{
				Date: '20200120104000000',
				Close: 20.27,
				Volume: 7102290,
				Open: 19.4149,
				High: 20.68,
				Low: 18.53,
				DT: '2020-01-20T15:40:00.000Z',
				displayDate: '2020-01-20T15:40:00.000Z',
			},
			{
				Date: '20200120104500000',
				Close: 20.7,
				Volume: 4168710,
				Open: 20.27,
				High: 21.42,
				Low: 20.23,
				DT: '2020-01-20T15:45:00.000Z',
				displayDate: '2020-01-20T15:45:00.000Z',
			},
			{
				Date: '20200120105000000',
				Close: 20.04,
				Volume: 7598370,
				Open: 20.7,
				High: 21.55,
				Low: 19.66,
				DT: '2020-01-20T15:50:00.000Z',
				displayDate: '2020-01-20T15:50:00.000Z',
			},
			{
				Date: '20200120105500000',
				Close: 19.84,
				Volume: 6938880,
				Open: 20.04,
				High: 20.4,
				Low: 19.4,
				DT: '2020-01-20T15:55:00.000Z',
				displayDate: '2020-01-20T15:55:00.000Z',
			},
			{
				Date: '20200120110000000',
				Close: 20.31,
				Volume: 6332040,
				Open: 19.84,
				High: 21.21,
				Low: 19.75,
				DT: '2020-01-20T16:00:00.000Z',
				displayDate: '2020-01-20T16:00:00.000Z',
			},
			{
				Date: '20200120110500000',
				Close: 21.14,
				Volume: 6897930,
				Open: 20.31,
				High: 21.9355,
				Low: 19.97,
				DT: '2020-01-20T16:05:00.000Z',
				displayDate: '2020-01-20T16:05:00.000Z',
			},
			{
				Date: '20200120111000000',
				Close: 21.3928,
				Volume: 4187820,
				Open: 21.14,
				High: 21.41,
				Low: 20.3,
				DT: '2020-01-20T16:10:00.000Z',
				displayDate: '2020-01-20T16:10:00.000Z',
			},
			{
				Date: '20200120111500000',
				Close: 20.51,
				Volume: 4686240,
				Open: 21.3928,
				High: 22.27,
				Low: 19.7,
				DT: '2020-01-20T16:15:00.000Z',
				displayDate: '2020-01-20T16:15:00.000Z',
			},
			{
				Date: '20200120112000000',
				Close: 19.59,
				Volume: 4774770,
				Open: 20.51,
				High: 20.91,
				Low: 19.2,
				DT: '2020-01-20T16:20:00.000Z',
				displayDate: '2020-01-20T16:20:00.000Z',
			},
			{
				Date: '20200120112500000',
				Close: 20.43,
				Volume: 7794540,
				Open: 19.59,
				High: 20.49,
				Low: 18.75,
				DT: '2020-01-20T16:25:00.000Z',
				displayDate: '2020-01-20T16:25:00.000Z',
			},
			{
				Date: '20200120113000000',
				Close: 20.18,
				Volume: 4358250,
				Open: 20.43,
				High: 21.01,
				Low: 20.09,
				DT: '2020-01-20T16:30:00.000Z',
				displayDate: '2020-01-20T16:30:00.000Z',
			},
			{
				Date: '20200120113500000',
				Close: 19.26,
				Volume: 4149210,
				Open: 20.18,
				High: 20.51,
				Low: 18.9,
				DT: '2020-01-20T16:35:00.000Z',
				displayDate: '2020-01-20T16:35:00.000Z',
			},
			{
				Date: '20200120114000000',
				Close: 19.99,
				Volume: 7248150,
				Open: 19.26,
				High: 20.72,
				Low: 18.72,
				DT: '2020-01-20T16:40:00.000Z',
				displayDate: '2020-01-20T16:40:00.000Z',
			},
			{
				Date: '20200120114500000',
				Close: 19.2497,
				Volume: 4500210,
				Open: 19.99,
				High: 20.87,
				Low: 18.6,
				DT: '2020-01-20T16:45:00.000Z',
				displayDate: '2020-01-20T16:45:00.000Z',
			},
			{
				Date: '20200120115000000',
				Close: 18.7,
				Volume: 6124950,
				Open: 19.2497,
				High: 19.88,
				Low: 18.01,
				DT: '2020-01-20T16:50:00.000Z',
				displayDate: '2020-01-20T16:50:00.000Z',
			},
			{
				Date: '20200120115500000',
				Close: 17.8988,
				Volume: 5732220,
				Open: 18.7,
				High: 18.97,
				Low: 17.42,
				DT: '2020-01-20T16:55:00.000Z',
				displayDate: '2020-01-20T16:55:00.000Z',
			},
			{
				Date: '20200120120000000',
				Close: 17.01,
				Volume: 5054010,
				Open: 17.8988,
				High: 18.64,
				Low: 16.91,
				DT: '2020-01-20T17:00:00.000Z',
				displayDate: '2020-01-20T17:00:00.000Z',
			},
			{
				Date: '20200120120500000',
				Close: 16.51,
				Volume: 7135050,
				Open: 17.01,
				High: 17.73,
				Low: 16.44,
				DT: '2020-01-20T17:05:00.000Z',
				displayDate: '2020-01-20T17:05:00.000Z',
			},
			{
				Date: '20200120121000000',
				Close: 16.31,
				Volume: 6860880,
				Open: 16.51,
				High: 16.97,
				Low: 15.69,
				DT: '2020-01-20T17:10:00.000Z',
				displayDate: '2020-01-20T17:10:00.000Z',
			},
			{
				Date: '20200120121500000',
				Close: 16.18,
				Volume: 7312890,
				Open: 16.31,
				High: 16.77,
				Low: 15.6992,
				DT: '2020-01-20T17:15:00.000Z',
				displayDate: '2020-01-20T17:15:00.000Z',
			},
			{
				Date: '20200120122000000',
				Close: 16.88,
				Volume: 7340970,
				Open: 16.18,
				High: 17.58,
				Low: 16.14,
				DT: '2020-01-20T17:20:00.000Z',
				displayDate: '2020-01-20T17:20:00.000Z',
			},
			{
				Date: '20200120122500000',
				Close: 16.39,
				Volume: 4167150,
				Open: 16.88,
				High: 17.21,
				Low: 15.75,
				DT: '2020-01-20T17:25:00.000Z',
				displayDate: '2020-01-20T17:25:00.000Z',
			},
			{
				Date: '20200120123000000',
				Close: 15.84,
				Volume: 4077450,
				Open: 16.39,
				High: 16.58,
				Low: 15.76,
				DT: '2020-01-20T17:30:00.000Z',
				displayDate: '2020-01-20T17:30:00.000Z',
			},
			{
				Date: '20200120123500000',
				Close: 16.32,
				Volume: 6497010,
				Open: 15.84,
				High: 17.09,
				Low: 15.6841,
				DT: '2020-01-20T17:35:00.000Z',
				displayDate: '2020-01-20T17:35:00.000Z',
			},
			{
				Date: '20200120124000000',
				Close: 15.69,
				Volume: 7703670,
				Open: 16.32,
				High: 16.54,
				Low: 15.65,
				DT: '2020-01-20T17:40:00.000Z',
				displayDate: '2020-01-20T17:40:00.000Z',
			},
			{
				Date: '20200120124500000',
				Close: 15.8,
				Volume: 7711470,
				Open: 15.69,
				High: 16.52,
				Low: 14.94,
				DT: '2020-01-20T17:45:00.000Z',
				displayDate: '2020-01-20T17:45:00.000Z',
			},
			{
				Date: '20200120125000000',
				Close: 15.65,
				Volume: 7340970,
				Open: 15.8,
				High: 16.4851,
				Low: 15.44,
				DT: '2020-01-20T17:50:00.000Z',
				displayDate: '2020-01-20T17:50:00.000Z',
			},
			{
				Date: '20200120125500000',
				Close: 16.42,
				Volume: 4752930,
				Open: 15.65,
				High: 16.51,
				Low: 15.63,
				DT: '2020-01-20T17:55:00.000Z',
				displayDate: '2020-01-20T17:55:00.000Z',
			},
			{
				Date: '20200120130000000',
				Close: 16.18,
				Volume: 6346860,
				Open: 16.42,
				High: 16.66,
				Low: 15.7014,
				DT: '2020-01-20T18:00:00.000Z',
				displayDate: '2020-01-20T18:00:00.000Z',
			},
			{
				Date: '20200120130500000',
				Close: 16.47,
				Volume: 4277910,
				Open: 16.18,
				High: 16.85,
				Low: 15.554,
				DT: '2020-01-20T18:05:00.000Z',
				displayDate: '2020-01-20T18:05:00.000Z',
			},
			{
				Date: '20200120131000000',
				Close: 16.6,
				Volume: 6820320,
				Open: 16.47,
				High: 16.72,
				Low: 15.88,
				DT: '2020-01-20T18:10:00.000Z',
				displayDate: '2020-01-20T18:10:00.000Z',
			},
			{
				Date: '20200120131500000',
				Close: 16.75,
				Volume: 5035680,
				Open: 16.6,
				High: 17.22,
				Low: 15.97,
				DT: '2020-01-20T18:15:00.000Z',
				displayDate: '2020-01-20T18:15:00.000Z',
			},
			{
				Date: '20200120132000000',
				Close: 16.6575,
				Volume: 6297330,
				Open: 16.75,
				High: 17.26,
				Low: 15.9681,
				DT: '2020-01-20T18:20:00.000Z',
				displayDate: '2020-01-20T18:20:00.000Z',
			},
			{
				Date: '20200120132500000',
				Close: 17.1,
				Volume: 5876520,
				Open: 16.6575,
				High: 17.7,
				Low: 15.84,
				DT: '2020-01-20T18:25:00.000Z',
				displayDate: '2020-01-20T18:25:00.000Z',
			},
			{
				Date: '20200120133000000',
				Close: 17.0281,
				Volume: 7604610,
				Open: 17.1,
				High: 17.19,
				Low: 16.98,
				DT: '2020-01-20T18:30:00.000Z',
				displayDate: '2020-01-20T18:30:00.000Z',
			},
			{
				Date: '20200120133500000',
				Close: 17.57,
				Volume: 4313010,
				Open: 17.0281,
				High: 18.09,
				Low: 17.02,
				DT: '2020-01-20T18:35:00.000Z',
				displayDate: '2020-01-20T18:35:00.000Z',
			},
			{
				Date: '20200120134000000',
				Close: 17.53,
				Volume: 5260320,
				Open: 17.57,
				High: 18.04,
				Low: 16.7,
				DT: '2020-01-20T18:40:00.000Z',
				displayDate: '2020-01-20T18:40:00.000Z',
			},
			{
				Date: '20200120134500000',
				Close: 18.14,
				Volume: 6296550,
				Open: 17.53,
				High: 18.2,
				Low: 16.87,
				DT: '2020-01-20T18:45:00.000Z',
				displayDate: '2020-01-20T18:45:00.000Z',
			},
			{
				Date: '20200120135000000',
				Close: 18.66,
				Volume: 5758740,
				Open: 18.14,
				High: 18.9,
				Low: 17.51,
				DT: '2020-01-20T18:50:00.000Z',
				displayDate: '2020-01-20T18:50:00.000Z',
			},
			{
				Date: '20200120135500000',
				Close: 19.15,
				Volume: 7722000,
				Open: 18.66,
				High: 19.34,
				Low: 17.73,
				DT: '2020-01-20T18:55:00.000Z',
				displayDate: '2020-01-20T18:55:00.000Z',
			},
			{
				Date: '20200120140000000',
				Close: 19.58,
				Volume: 6440850,
				Open: 19.15,
				High: 19.77,
				Low: 19.05,
				DT: '2020-01-20T19:00:00.000Z',
				displayDate: '2020-01-20T19:00:00.000Z',
			},
			{
				Date: '20200120140500000',
				Close: 19.33,
				Volume: 5507580,
				Open: 19.58,
				High: 19.7,
				Low: 19.33,
				DT: '2020-01-20T19:05:00.000Z',
				displayDate: '2020-01-20T19:05:00.000Z',
			},
			{
				Date: '20200120141000000',
				Close: 18.54,
				Volume: 3942120,
				Open: 19.33,
				High: 19.5384,
				Low: 18.03,
				DT: '2020-01-20T19:10:00.000Z',
				displayDate: '2020-01-20T19:10:00.000Z',
			},
			{
				Date: '20200120141500000',
				Close: 18.67,
				Volume: 3901950,
				Open: 18.54,
				High: 18.78,
				Low: 18.44,
				DT: '2020-01-20T19:15:00.000Z',
				displayDate: '2020-01-20T19:15:00.000Z',
			},
		];
		return masterData;
	}
}