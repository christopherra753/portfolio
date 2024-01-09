import React from 'react'
import { RiUserVoiceLine, RiPhoneLine, RiMailLine, RiTwitterLine, RiLinkedinBoxLine, RiGithubLine, RiInstagramLine } from 'react-icons/ri'
import Toastify from 'toastify-js'

function Contact () {
  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json'
      }
    })
    if (response.ok) {
      event.target.reset()
      Toastify({
        text: 'Correo enviado',
        duration: 1000,
        style: {
          background: '#0e7490',
          color: '#fff'
        }
      }).showToast()
    }
  }

  return (
    <section id='contacto' className='py-24 px-5'>
      <div className='max-w-5xl mx-auto'>
        <h1 className='text-3xl flex items-center gap-2 mb-10'>
          <span className='text-first dark:text-cyan-400 font-bold'>Contacto</span>
          <RiUserVoiceLine className='text-cyan-800 dark:text-cyan-400 mt-1.5 size-7' />
        </h1>
        <div className='flex flex-col gap-10 md:flex-row'>
          <div className='flex-1'>
            <div className='space-y-2'>
              <p className='flex items-start'>
                <RiPhoneLine className='w-6 h-6 text-first dark:text-cyan-400' />
                <span
                  className='mx-2 text-gray-700 dark:text-gray-200 font-semibold truncate'
                >+51 930 520 548
                </span>
              </p>

              <p className='flex items-start'>
                <RiMailLine className='w-6 h-6 text-first dark:text-cyan-400' />
                <span
                  className='mx-2 text-gray-700 dark:text-gray-200 font-semibold truncate'
                >christopher.romero.753@gmail.com
                </span>
              </p>
            </div>
            <div className='mt-6 md:mt-8'>
              <h3 className='text-first dark:text-cyan-400 font-semibold'>Sigueme</h3>
              <div className='flex mt-4 gap-4'>
                <a
                  className='text-gray-400 dark:text-gray-100 transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400'
                  href='https://twitter.com/ChristopherDev_'
                  target='_blank' rel='noreferrer'
                >
                  <RiTwitterLine className='size-8' />
                </a>
                <a
                  className='text-gray-400 dark:text-gray-100 transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400'
                  href='https://www.linkedin.com/in/christopher-romero-avenda%C3%B1o-9003552a6/'
                  target='_blank' rel='noreferrer'
                >
                  <RiLinkedinBoxLine className='size-8' />
                </a>
                <a
                  className='text-gray-400 dark:text-gray-100 transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400'
                  href='https://github.com/christopherra753'
                  target='_blank' rel='noreferrer'
                >
                  <RiGithubLine className='size-8' />
                </a>
                <a
                  className='text-gray-400 dark:text-gray-100 transition-colors duration-300 transform hover:text-blue-500 dark:hover:text-blue-400'
                  href='https://www.instagram.com/chris060709/'
                  target='_blank' rel='noreferrer'
                >
                  <RiInstagramLine className='size-8' />
                </a>
              </div>
            </div>
          </div>

          <div className='flex-1'>
            <div
              className='w-full px-8 py-10 mx-auto overflow-hidden bg-second dark:bg-neutral-600 rounded-lg lg:max-w-xl transition-colors'
            >
              <h1 className='text-2xl text-first font-semibold dark:text-cyan-400'>
                Preguntame algo
              </h1>

              <form
                onSubmit={handleSubmit}
                id='form'
                method='POST'
                action='https://api.web3forms.com/submit'
                className='mt-6'
              >
                <input type='hidden' name='access_key' value='4a051587-ff97-4da6-9838-b899b5fe7a79' />
                <div className='flex-1 mt-6'>
                  <label
                    className='block mb-2 text-sm text-gray-600 dark:text-gray-300 font-semibold'
                  >Correo Electronico
                  </label>
                  <input
                    name='email'
                    type='email'
                    placeholder='ejemplo@gmail.com'
                    className='block w-full px-4 py-2 mt-2 text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:bg-neutral-700 bg-white border dark:border-gray-500 border-gray-200 rounded-md outline-none focus:border-first dark:focus:border-cyan-400'
                  />
                </div>

                <div className='flex-1 mt-6'>
                  <label
                    className='block mb-2 text-sm text-gray-600 dark:text-gray-300 font-semibold'
                  >Mensaje
                  </label>
                  <textarea
                    name='message'
                    className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 dark:text-gray-200 bg-white dark:bg-neutral-700 dark:border-gray-500 border border-gray-200 rounded-md outline-none focus:border-first dark:focus:border-cyan-400'
                    placeholder='Me interesa tu perfil'
                    rows='5'
                  />
                </div>

                <button
                  className='w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-first/80 rounded-lg dark:bg-cyan-400/90 dark:text-black dark:hover:bg-cyan-400 hover:bg-first'
                >Enviar Correo
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
