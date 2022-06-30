import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProfileInfo } from './ProfileInfo';


export default {
   title: 'ProfileInfo',
   component: ProfileInfo,
} as ComponentMeta<typeof ProfileInfo>;

export const TemplateProfileInfo: ComponentStory<typeof ProfileInfo> = () => <ProfileInfo />;

