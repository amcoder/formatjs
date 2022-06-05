// @react-intl project:foo file:bar
import React, {Component} from 'react'
import {defineMessages, FormattedMessage, defineMessage} from 'react-intl'

const msgs = defineMessages({
  header: {
    id: 'foo.bar.baz',
    defaultMessage: 'Hello World!',
    description: 'The default message',
  },
  content: {
    id: 'foo.bar.biff',
    defaultMessage: 'Hello Nurse!',
    description: 'Another message',
  },
  newline: {
    id: 'newline',
    description: 'this is \
    a \
    description',
    defaultMessage: 'this is \
    a message',
  },
} as const)

const msg = defineMessage({
  id: 'single.defineMessage',
  defaultMessage: 'single defineMessage call',
  description: 'This is a single call to defineMessage',
})

export default class Foo extends Component {
  render() {
    const {intl} = this.props
    return (
      <div>
        <h1>
          <FormattedMessage {...msgs.header} />
        </h1>
        <p>
          {intl.formatMessage({
            id: 'formatMessage',
            defaultMessage: 'called formatMessage',
            description: 'a description',
          })}
        </p>
        <p>
          <FormattedMessage {...msgs.newline} />
          <FormattedMessage
            id="inline"
            defaultMessage="formatted message"
            description="foo"
          />
        </p>
      </div>
    )
  }
}
