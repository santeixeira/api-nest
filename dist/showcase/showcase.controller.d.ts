import { ShowcaseService } from './showcase.service';
export declare class ShowcaseController {
    private readonly showcaseService;
    constructor(showcaseService: ShowcaseService);
    findAll(): Promise<unknown>;
    findOne(id: string): Promise<unknown>;
}
