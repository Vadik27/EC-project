import React from 'react'
import Paginator from '../common/Paginator/Paginator'
import User from './User'

const Users = ({ currentPage, onPageChange, totalUsersCount, pageSize, users, ...props }) => {
    return (
        <div>
            <Paginator
                currentPage={currentPage}
                onPageChange={onPageChange}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize} />

            {
                users.map((u) => <User
                    user={u}
                    key={u.id}
                    followingInProgress={props.followingInProgress}
                    unfollow={props.unfollow}
                    follow={props.follow} />)
            }
        </div>
    )
}

export default Users;