import React, { useState } from 'react';
import { Form, Input, Button, InputNumber, Typography, Divider} from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { Redirect, useHistory } from 'react-router-dom';
import { useHideMenu } from '../hooks/useHideMenu';
import { getUserStorage } from '../helpers/getUserStorage';

const {Title, Text} = Typography;

const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

export const Enter = () => {

    useHideMenu(false);

    const [user] = useState(getUserStorage());
    
    const history = useHistory();

    const onFinish = ({username, desk}) => {
        localStorage.setItem('username', username );
        localStorage.setItem('desk', desk);
        history.push('/desktop');
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

      if(user.username && user.desk){
        return <Redirect to="/desktop"/>
      }

    return (
        <>
        <Title level={2}></Title>
        <Text>Ingrese su nombre y numero de escritorio</Text>
        <Divider/>
        <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="User"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Desk"
        name="desk"
        rules={[
          {
            required: true,
            message: 'Please input your desk!',
          },
        ]}
      >
        <InputNumber min={1} max={99}/>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" shape="round">
        <SaveOutlined />
          Sign up
        </Button>
      </Form.Item>
    </Form>
        </>
    )
}
