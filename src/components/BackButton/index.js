import React from 'react';
import { useNavigate } from 'react-router-dom';

import image from '../../../assets/github.png'

const BackButton = () => {
  const navigate = useNavigate()
  return (
    <button id='back' onClick={() => navigate(-1)}>Back</button >
  )
}

export default BackButton
