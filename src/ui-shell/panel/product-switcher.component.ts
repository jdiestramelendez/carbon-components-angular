import { Component, HostBinding, Input } from "@angular/core";

/**
 * @deprecated `ibm-product-x` selectors and components are deprecated and will be removed in the next major version
 */
@Component({
	selector: "ibm-product-switcher",
	template: `
		<div class="bx--product-switcher__search">
			<ng-content select="ibm-search"></ng-content>
		</div>
		<p class="bx--product-switcher__subheader">{{header}}</p>
		<ng-content></ng-content>
	`
})
export class ProductSwitcher {
	@Input() header = "";
	@HostBinding("class.bx--product-switcher") hostClass = true;
}
