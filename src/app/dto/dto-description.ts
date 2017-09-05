import 'reflect-metadata';

export const DtoDescriptionKey = 'dtoDescription';

export function DtoDescription(config: {nameInUrl: string}) {
    return function(target: Function){
        Reflect.defineMetadata(DtoDescriptionKey, config, target);
    };
}
