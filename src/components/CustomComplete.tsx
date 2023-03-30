import React from 'react';

import * as Flex from '@twilio/flex-ui';
import { AnalyticsBrowser } from '@segment/analytics-next';

import { Button } from '@twilio-paste/core/button';
import { Theme } from '@twilio-paste/core/theme';

export interface ICustomCompleteProps {
  task?: any;
  analytics: AnalyticsBrowser;
  flex: typeof Flex;
}

export const CustomComplete: React.FunctionComponent<ICustomCompleteProps> = (props) => {
  const { task } = props;

  const onClick = () => {
    props.analytics.track('Flex Task Completed', { message: 'The task was complete.' });
    props.flex.Actions.invokeAction("CompleteTask", { task });
  };

  return (
    <Theme.Provider theme="default">
      <Button variant="primary" onClick={() => onClick()}>Custom complete {task.status}</Button>
    </Theme.Provider>
  );
};
