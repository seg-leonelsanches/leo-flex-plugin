import React from 'react';
import * as Flex from '@twilio/flex-ui';
import { FlexPlugin } from '@twilio/flex-plugin';

import { AnalyticsBrowser } from '@segment/analytics-next';

import { CustomComplete, CustomTaskList } from './components';

const PLUGIN_NAME = 'LeoFlexPlugin';

export default class LeoFlexPlugin extends FlexPlugin {
  analytics: AnalyticsBrowser;

  constructor() {
    super(PLUGIN_NAME);
    this.analytics = AnalyticsBrowser.load({ 
      writeKey: String(process.env.FLEX_SEGMENT_WRITE_KEY), 
      cdnURL: process.env.NEXT_PUBLIC_SEGMENT_CDN || 'https://cdn.segment.com' 
    });
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof Flex }
   */
  async init(flex: typeof Flex, manager: Flex.Manager): Promise<void> {
    const options: Flex.ContentFragmentProps = { sortOrder: -1 };

    // Agent Desktop View is the left-most panel in the Flex UI.
    flex.AgentDesktopView.Panel1.Content.add(<CustomTaskList key="SamplePlugin-component" analytics={this.analytics} />, options);
    
    // CRM Container is the right-most panel in the Flex UI.
    flex.CRMContainer.defaultProps.uriCallback = (task) => {
      return task
        ? `https://www.bing.com/search?q=${task.attributes.name}`
        : "https://www.bing.com"
    }

    // Task Canvas Header is the top-most panel in a task.
    flex.TaskCanvasHeader.Content.add(<CustomComplete key="custom-complete" analytics={this.analytics} flex={flex} />);
    flex.TaskCanvasHeader.Content.remove("actions");
  }
}
