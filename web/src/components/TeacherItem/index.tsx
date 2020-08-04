import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/7698160?s=460&u=d91d6c38464b12f433a4ea1db0ea6e8040d4417d&v=4" alt="" />
        <div>
          <strong>Fernanda Rodriguez</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Texto de descrição
          </p>

      <footer>
        <p>
          Preço por hora
              <strong>R$20</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
              Entrar em contato
            </button>
      </footer>

    </article>
  )
}

export default TeacherItem;