/* Much from https://medium.com/better-programming/2020-007-the-facets-of-w3c-web-components-e76798ab7b29 */

/**
 * How to keep separation of concerns in web components.
 * By calling this on connectedCallback we can load the HTML and CSS
 * from separate files and thus keep our separation of concerns.
 */
async connectedCallback() {        
	var htmlFragment = await this.fetchTemplate();
	var styleElement = await this.fetchCSS();
	this.attachShadow({mode: 'open'});
	this.shadowRoot.appendChild(htmlFragment); 
	this.shadowRoot.appendChild(styleElement); 
  }
  
  /**
   * To make a web component customizable and distributable
   * add CSS var to the host: part of the CSS that is shared 
   * between the component and the parent code.
   */
  /*
  :host {
	--color: white;
	--background-color: black;
	--width: 70vw;
	--height: 50vh;
  }
  #component {
	color: var(--color);
	background-color: var(--background-color);
	width: var(--width);
	height: var(--height);
  }
  Then in parent code, refer the variables as this:
  my-component {
	  --color: midnightblue;
	  --background-color: mintcreme;
	  --width: 700px;
	  --height: 500px;
  }
  
  */
  
  /**
   * Distribution
   * Package.json
   */
  /*
  {
	"name": "my-component",
	"version": "1.0.0",
	"description": "a W3C standard web component",
	"repository": {
	  "type": "git",
	  "url": "https://github.com/my-github-user-name/my-component.git"
	},
	"files": [
	  "my-component.html",
	  "my-component.css",
	  "my-component.js"
	]
  }
  */
  
  /**
   * Dokumentation.
   * The published readme file should have these sections:
  Motivation. A statement of what problem the component solves.
  Features. A description of how the component solves that problem.
  Installation. A link to where to get the component, and where to put it.
  Configuration. A description of how to use each attribute exposed to the consumer.
  Example. A Hello World walk-through showing how to get the component working on an HTML page.
  Customization. A list of all the CSS variables that can be overridden.
  Events. A list of the events emitted or consumed by the component and their place in the lifecycle.
   */