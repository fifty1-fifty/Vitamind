import { Container, Title, Text, Button, Group } from '@mantine/core';
import '@mantine/core/styles.css';
import 'material-icons/iconfont/material-icons.css';

export default function TemplatePage() {
  return (
    <Container size="sm" py="xl">
      <Title order={2} mb="md">
        Welcome to Your Template Page
      </Title>
      <Text mb="lg">
        This is a simple template page using Mantine UI components.
        <span className="material-icons">pie_chart</span>
      </Text>
      <Group>
        <Button>Primary Action</Button>
        <Button variant="outline">Secondary Action</Button>
      </Group>
    </Container>
  );
}
