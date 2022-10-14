import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import '../Styles/Profile.css'
import student from '../img/st.png'
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
function Profile(props) {
    const onFinish = (values) => {
        console.log(values);
    };
    return (
        <div className='fullBox'>
 
            <div className='backBox'>
                <div className='profileBox'>
                    <img src={student} height='100' width='100' borderRadious='47'></img>
                </div>
                <div style={{ marginLeft: '30%',marginRight:"10vw" ,marginTop:20,color:'#fff'}}>
                    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                        <Form.Item 
                            name={['user', 'name']}
                            
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                        <p style={{color:'#fff'}}>Name</p>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={['user', 'email']}
                           
                            rules={[
                                {
                                    type: 'email',
                                },
                            ]}
                        >
                        <p style={{color:'#fff'}}>Email</p>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={['user', 'age']}
                            
                            rules={[
                                {
                                    type: 'number',
                                    min: 0,
                                    max: 99,
                                },
                            ]}
                        >
                        <p style={{color:'#fff'}}>Age</p>
                            <InputNumber />
                        </Form.Item>
                        
                        <Form.Item name={['user', 'introduction']} >
                        <p style={{color:'#fff'}}>Introduction</p>
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{
                                ...layout.wrapperCol,
                                offset: 8,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Save
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <button style={{marginLeft:'47%'}}>LogOut</button>
            </div>
        </div>
    );
}

export default Profile;