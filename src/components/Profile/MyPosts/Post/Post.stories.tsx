import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Post } from './Post';
import { PostType } from '../../../../redux/state';

export default {
   title: 'Post',
   component: Post,
} as ComponentMeta<typeof Post>;

export const TemplatePost: ComponentStory<typeof Post> = (args: PostType) => <Post {...args} />;

