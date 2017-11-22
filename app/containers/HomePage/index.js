/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import tinymce from 'tinymce'; // eslint-disable-line no-unused-vars
import 'tinymce/themes/modern';
import 'tinymce/plugins/link';
import 'tinymce/plugins/paste';
import { Editor } from '@tinymce/tinymce-react';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Editor
        id="test"
        initialValue="<p>Hello world</p>"
        init={{ plugins: 'link paste' }}
      />
    );
  }
}
