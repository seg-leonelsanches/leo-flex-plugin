import React, { useState } from 'react';

import { AnalyticsBrowser } from '@segment/analytics-next';

import { Alert } from '@twilio-paste/core/alert';
import { Theme } from '@twilio-paste/core/theme';
import { Text } from '@twilio-paste/core/text';

export interface ICustomTaskListProps {
  analytics: AnalyticsBrowser;
}

export const CustomTaskList = (props: ICustomTaskListProps): JSX.Element | null => {
  const [isOpen, setIsOpen] = useState(true);
  if (!isOpen) {
    return null;
  }
  
  const dismiss = () => {
    props.analytics.track('Flex Test', { message: 'Click to dismiss and send something to Segment.' });
    setIsOpen(false);
  }
  
  return (
    <Theme.Provider theme="default">
      <Alert onDismiss={dismiss} variant="neutral">
      <Text as="span">Click to dismiss and send something to Segment.</Text>
      </Alert>
    </Theme.Provider>
  );
};

CustomTaskList.displayName = 'foo';
