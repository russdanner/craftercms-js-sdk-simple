import { ContentStoreService, NavigationService, UrlTransformationService } from '@craftercms/content';
import { crafterConf } from '@craftercms/classes';

crafterConf.configure({
  site: 'editorial'
})


  function component() {

 ContentStoreService.getItem("/site/website/index.xml", crafterConf.getConfig())
          .subscribe((respItem) => {
			    var element = document.createElement('div');
			    element.innerHTML = respItem.descriptorDom.page['hero_title'];
			    document.body.appendChild(element);
          })
  }
component();
