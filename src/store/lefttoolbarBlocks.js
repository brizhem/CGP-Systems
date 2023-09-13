import iconHeadline from '../assets/iconHeadline.png';
import iconParagraph from '../assets/iconParagraph.png';
import iconButton from '../assets/iconImg.png';

const lefttoolbarBlocks = [
    {
        id: 1,
        title: 'Headline',
        content: <h2>A legendary cap set that feels like new</h2>,
        icon: <img src={iconHeadline} alt='icon Headline' />
    },
    {
        id: 2,
        title: 'Paragraph',
        content: <p style={{ textAlign: 'center' }}>
                    Prompt your customer to revisit your store by showing them the products they left behind. Consider offering them a coupon code to close the deal.
                    Using the "Insert" panel on the right, drag and drop 
                    the Abandoned Cart element onto the page below.
                 </p>,
        icon: <img src={iconParagraph} alt='icon Paragraph' />
    },
    {
        id: 3,
        title: 'Button',
        content: <button 
                    style={{ 
                        width: '145px',
                        height: '40px',
                        backgroundColor: '#4368E0',
                        border: 'none',
                        borderRadius: '4px' 
                    }}
                 >
                    Register now
                 </button>,
        icon: <img src={iconButton} alt='icon' />
    },
    {
        id: 4,
        title: 'Image',
        content: <img 
                    src={require("../assets/workingProcess.png")}
                    alt="working process"
                    style={{ width: '100%' }}
                />,
        icon: <img src={iconButton} alt='icon' />
    }
];

export default lefttoolbarBlocks;