import './App.css'
import { Button, Form, Input } from 'react-components'

function App() {

  function handleFinish(value: any) {
    console.log('success')
    console.log(value)
  }

  function handleFinishFailed(value: any) {
    console.log('fail')
    console.log(value)
  }

  return (
    <>
      <Form
        onFinish={handleFinish}
        onFinishFailed={handleFinishFailed}
      >
        <Form.Item
          label='姓名'
          name='name'
          rules={[
            {
              required: false,
            }
          ]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label='密码'
          name='password'
          rules={[
            {
              required: true,
              range: [1, 10]
            }
          ]}
        >
          <Input type='password'/>
        </Form.Item>
        <Form.Item
          label='记住密码'
          name='remember'
        >
          <Input type='checkbox'/>
        </Form.Item>
        <Form.Item>
          <Button htmlType='submit' round={true}>提交</Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default App
