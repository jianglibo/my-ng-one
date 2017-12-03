import 'reflect-metadata';
import { DtoDescriptionKey } from './dto-description';
import { SingleBody } from './single-body';
import { Manufacturer } from './manufacturer';
import { ManufacturerAttributes } from './manufacturer-attributes';
import { JsonapiObject } from './jsonapi-object';

describe('singlebody', () => {
    it('should create singlebody', () => {
        let ji = new Manufacturer(new ManufacturerAttributes());
        let sb = new SingleBody<ManufacturerAttributes, Manufacturer>(ji);
        console.log('sb');
        console.log(sb);
    });
});
