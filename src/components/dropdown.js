import { MinusOutlined } from '@ant-design/icons'
import { PlusOutlined } from '@ant-design/icons'
import { Collapse } from 'antd';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const tex = `yes it is,if you have a membership with us.otherwise it is charged as per the menu.some limit do apply as to how much items can be included in your luch
This limit is enough for any one person nd merely exists to discourage abusal of this system. `

const labe = 'Do u have a 2 Bedroom suites'
const lab = 'Are wifi included in the price'
const la = 'Where can i reach u for support'
const l = 'Is lunch provided free of cost  ?'

const Collapsible = () => {

    const items = [

        {

            key: '1',
            label: <div className='text-primary-emphasis fw-bold fs-6'>{l}</div>,
            children: <div className='text-secondary'>{tex}</div>,


        },
        {
            key: '2',
            label: <div className='text-primary-emphasis fw-bold fs-6'>{labe}</div>,
            children: <div className='text-secondary'>{text}</div>,

        },

        {
            key: '3',
            label: <div className='text-primary-emphasis fw-bold fs-6'>{lab}</div>,
            children: <div className='text-secondary'>{tex}</div>,

        },
        {
            key: '4',
            label: <div className='text-primary-emphasis fw-bold fs-6'>{la}</div>,
            children: <div className='text-secondary'>{text}</div>,

        },
    ];


    return (
        <div className="container">
            <div>
                <h3 className='text-primary-emphasis fw-bolder fs-1'>Questions</h3>
                <h6 className='mb-4 text-secondary mt-4'>Here are some frequently asked questions about our hotels from our loving customers. Should you have any other questions, feel free to reach out via the contact form below.

                </h6>
            </div>

            <Collapse accordion defaultActiveKey={['6']} ghost items={items}
                expandIconPosition='right'
                expandIcon={({ isActive }) => isActive ? <MinusOutlined  className='fs-6 p-1' style={{ background: '#6610f2', color: 'white', borderRadius: '50%', height: '95%', width: '100%' }} /> : <PlusOutlined className='fs-6 p-1' style={{ background: '#6610f2', color: 'white', borderRadius: '50%', height: '95%', width: '100%' }} />}
            />

        </div>


    )
}
export default Collapsible;