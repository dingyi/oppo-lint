/** @jsx h */
import { emit } from '@create-figma-plugin/utilities'
import { render, Container, Text, VerticalSpace, Button } from '@create-figma-plugin/ui'
import { h } from 'preact'

function Plugin(props: { greeting: string }) {
  function handleClick() {
    const data = { greeting: 'Hello, World!' }
    emit('SUBMIT', data)
  }
  return (
    <Container space='medium'>
      <VerticalSpace space='medium' />
      <Text>{props.greeting}</Text>
      <VerticalSpace space='medium' />
      <Button onClick={handleClick}>Submit</Button>
    </Container>
  )
}

export default render(Plugin)