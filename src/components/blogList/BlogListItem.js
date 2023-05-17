import React from 'react'
import moment from 'moment/moment'
import { Link } from 'react-router-dom'
import Modal from './../ui/Modal'
import UpdateBlog from './../updateBlog/UpdateBlog'
import DeleteBlog from './../deleteBlog/DeleteBlog'
import { TrashIcon, PencilSquareIcon, EyeIcon } from '@heroicons/react/24/solid'
import BlogRead from './../blogRead/BlogRead'

const BlogListItem = ({ blog }) => {
  const {
    _id,
    title,
    description,
    category,
    banner,
    createdAt,
    user: { name, avatar },
  } = blog

  // Modal Functionalities
  const [viewModal, setViewModal] = React.useState(false)
  const [editModal, setEditModal] = React.useState(false)
  const [deleteModal, setDeleteModal] = React.useState(false)
  const [id, setid] = React.useState(null)

  const modalCloser = () => {
    setViewModal(false)
    setEditModal(false)
    setDeleteModal(false)
  }
  const setModal = (type) => {
    switch (type) {
      case 'view':
        modalCloser()
        setViewModal(true)
        break
      case 'edit':
        modalCloser()
        setEditModal(true)
        break
      case 'delete':
        modalCloser()
        setDeleteModal(true)
        break
      default:
        return false
    }
  }

  return (
    <>
      {viewModal && (
        <Modal open={viewModal} modalHandler={modalCloser} maxWidth="max-w-7xl 2xl:max-w-[83%]">
          <BlogRead id={id} modalHandler={modalCloser} data={blog} />
        </Modal>
      )}
      {editModal && (
        <Modal open={editModal} modalHandler={modalCloser}>
          <UpdateBlog id={id} modalHandler={modalCloser} data={blog} />
        </Modal>
      )}
      {deleteModal && (
        <Modal open={deleteModal} modalHandler={modalCloser}>
          <DeleteBlog id={id} modalHandler={modalCloser} />
        </Modal>
      )}
      <div class='card relative bg-slate-100'>
        <img
          class='h-48 w-full rounded-t-lg object-cover object-center cursor-pointer rounded-lg transition duration-500 ease-in-out transform hover:object-scale-down'
          src={banner}
          alt='bannar'
        />

        <div class='flex w-full grow flex-col px-4 py-3 sm:px-5'>
          <div class='flex items-center justify-between'>
            <div class='badge space-x-2.5 rounded-full bg-info/10 text-info dark:bg-info/15'>
              <div class='h-2 w-2 rounded-full bg-current'></div>
              <span>{category}</span>
            </div>
            <div className='absolute z-10 flex space-x-1 right-2 top-2'>
              <div
                onClick={() => {
                  setModal('view')
                  setid(blog._id)
                }}
              >
                <EyeIcon className='h-7 w-7 px-1.5 py-1 rounded text-gray-100 hover:text-white bg-blue-500 hover:bg-blue-700 cursor-pointer' />
              </div>
              <div
                onClick={() => {
                  setModal('edit')
                  setid(blog._id)
                }}
              >
                <PencilSquareIcon className='h-7 w-7 px-1.5 py-1 rounded text-gray-100 hover:text-white bg-green-500 hover:bg-green-700 cursor-pointer' />
              </div>
              <div
                onClick={() => {
                  setModal('delete')
                  setid(blog._id)
                }}
              >
                <TrashIcon className='h-7 w-7 px-1.5 py-1 rounded text-gray-100 hover:text-white bg-red-500 hover:bg-red-700 cursor-pointer' />
              </div>
            </div>
          </div>
          <div>
            <div
              onClick={() => {
                setModal('view')
                setid(blog._id)
              }}
              class='text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light line-clamp-2 cursor-pointer'
            >
              {title}
            </div>
          </div>
          <p class='mt-1 line-clamp-2'>{description}</p>
          <div class='grow'>
            <div class='mt-2 flex items-center text-xs'>
              <div class='flex items-center space-x-2 hover:text-slate-800 dark:hover:text-navy-100'>
                <div class='avatar h-6 w-6'>
                  <img class='rounded-full' src={avatar} alt='avatar' />
                </div>
                <span class='line-clamp-1'>{name} </span>
              </div>
              <div class='mx-3 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500'></div>
              <span class='shrink-0 text-slate-400 dark:text-navy-300'>
                {moment(createdAt).fromNow()}
              </span>
            </div>
          </div>
          <div class='mt-1 flex justify-end'>
            <div
              onClick={() => {
                setModal('view')
                setid(blog._id)
              }}
              class='btn px-2.5 py-1.5 font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25'
            >
              READ ARTICLE
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogListItem
