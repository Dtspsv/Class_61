import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderOutlined';

import CheckBoxOutlineBlankTwoToneIcon from '@mui/icons-material/CheckBoxOutlineBlankTwoTone';
import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';

const FavIcon = ({liked, ...rest}) => {
    return (
        <div className='icon' {...rest}>
            {liked ? <FavoriteTwoToneIcon/> : <FavoriteBorderTwoToneIcon/>}
        </div>
    )
}

const CheckedIcon = ({checked, ...rest}) => {
    return (
        <div className='icon' {...rest}>
            {checked ? <CheckBoxTwoToneIcon/> : <CheckBoxOutlineBlankTwoToneIcon/>}
        </div>
    )
}


const PlayingIcon = ({playing, ...rest}) => {
    return (
        <div className='icon' {...rest}>
            {playing ? <img width="28px" src="img/play.gif"/> : <></>}
        </div>
    )
}

export {
    FavIcon,
    CheckedIcon,
    PlayingIcon
}