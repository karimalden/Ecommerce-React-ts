import React from 'react'
import { TSubTitle } from '../../Layout/app/Types';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const SubTitle = ({title,href,count,icon}:TSubTitle) => {
  const [t] = useTranslation()
  return (
    <div className='SubTitle'>
        <div>
       {icon}
       {t(`${title}`)}
        </div>
        <div>
            <Link to={`${href}`}>
            {t("See more")}{count}
            </Link>
        </div>

    </div>
  )
}

export default SubTitle