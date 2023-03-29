import React from 'react';
import * as Flex from '@twilio/flex-ui';
import { FlexPlugin } from '@twilio/flex-plugin';

import CustomTaskList from './components/CustomTaskList/CustomTaskList';
import { AnalyticsBrowser } from '@segment/analytics-next';

const PLUGIN_NAME = 'SamplePlugin';

export default class SamplePlugin extends FlexPlugin {
  analytics: AnalyticsBrowser;

  constructor() {
    super(PLUGIN_NAME);
    this.analytics = AnalyticsBrowser.load({ writeKey: '7tl0pCxGRB84BDywXBYx9j3xft9e6EVb', cdnURL: process.env.NEXT_PUBLIC_SEGMENT_CDN || 'https://cdn.segment.com' });
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof Flex }
   */
  async init(flex: typeof Flex, manager: Flex.Manager): Promise<void> {
    const options: Flex.ContentFragmentProps = { sortOrder: -1 };
    flex.AgentDesktopView.Panel1.Content.add(<CustomTaskList key="SamplePlugin-component" analytics={this.analytics} />, options);
    flex.CRMContainer.defaultProps.uriCallback = (task) => {
      return task
        ? `https://www.bing.com/search?q=${task.attributes.name}`
        : "https://www.bing.com"
    }
  }
}
