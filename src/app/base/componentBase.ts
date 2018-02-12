
import { Subscription } from 'rxjs/Subscription';


export abstract class ComponentBase {

    public addText: string;
    public headerText: string;

    public throttle: number;
    public scrollDistance: number;

    public isLoadingMore: boolean;
    public moreDataSubscription: Subscription;

    constructor() {
        
    }

    public setLoadingMore(): void {
        this.isLoadingMore = true;
    }

    public setLoadMoreComplete(): void {
        this.isLoadingMore = false;
    }
}
