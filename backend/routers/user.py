from fastapi import status, HTTPException, Depends, APIRouter
from sqlalchemy.orm import Session
from typing import List
from core import auth as core_auth
# from sqlalchemy.sql.functions import func
from database import get_db
import schemas.users as schemas
from models.users import User
from core.utils import hash_password, verify

router = APIRouter(
    prefix="/users",
    tags=["Users"])

@router.get("/", response_model=List[schemas.UserCreate])
async def get_users(db: Session = Depends(get_db)):
    return db.query(User).all()

@router.get("/getById/{uuid}", response_model=schemas.UserOut)
async def get_by_id(uuid: str, db: Session = Depends(get_db)):
    fetched_user = db.query(User).filter(User.uuid == uuid).first()
    if not fetched_user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                    detail=f"No user with uuid {uuid} record found!")
    return fetched_user

@router.get("/getByEmail/{email}", response_model=schemas.UserOut)
async def get_by_email(email: str, db: Session = Depends(get_db)):
    fetched_user = db.query(User).filter(User.email == email).first()
    if not fetched_user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                    detail=f"No user with email {email} found!")
    return fetched_user

@router.post("/", response_model=schemas.UserOut)
async def create_user(user_add: schemas.UserCreate, db: Session = Depends(get_db)):
    user_add.password = hash_password(user_add.password)
    new_user = User(**user_add.dict())
    user_query = db.query(User).filter(User.email == new_user.email).first()
    if user_query:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN,
            detail=f"User with Email - {new_user.email} already exists!")
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return user_add

@router.put("/", response_model=schemas.UserOut)
async def update_password(user_update: schemas.UpdatePassword, db: Session = Depends(get_db),
                            current_user: str = Depends(core_auth.get_current_user)):
    if not current_user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
            detail="User does not exist!")
    if not verify(user_update.old_password,current_user.password):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN,
        detail="Incorrect old password!")
    new_password = hash_password(user_update.new_password)
    # new_user = User(**user_update.dict())
    setattr(current_user,"password",new_password)
    db.commit()
    # for field in User.__table__.columns.keys():
    #     val = getattr(new_user, field)
    #     if val and val!="":
    #         setattr(new_user, field, val)

    # user_query.update(user_update.dict(), synchronize_session=False)

    # db.commit()
    return current_user

# @router.post('/login')
# async def login(user_creds: schemas.UserLogin, db: Session = Depends(get_db)):
#     user = db.query(User).filter(User.email == user_creds.email).first()
#     if not user:
#         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
#         detail="Invalid Credentials!")
#     if not verify(user_creds.password,user.password):
#         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
#         detail="Invalid Credentials!")
#     return {"token":"success!"}


# # @router.get("/", response_model=List[schemas.Post])
# @router.get("/", response_model=List[schemas.PostOut])
# def get_posts(db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user), limit: int = 10, skip: int = 0, search: Optional[str] = ""):
#     # results = db.query(models.Post, func.count(models.Vote.post_id).label("votes")).join(
#     #     models.Vote, models.Vote.post_id == models.Post.id, isouter=True).group_by(models.Post.id)

#     # cursor.execute("""SELECT * FROM posts """)
#     # posts = cursor.fetchall()

#     # posts = db.execute(
#     #     'select posts.*, COUNT(votes.post_id) as votes from posts LEFT JOIN votes ON posts.id=votes.post_id  group by posts.id')
#     # results = []
#     # for post in posts:
#     #     results.append(dict(post))
#     # print(results)
#     # posts = db.query(models.Post).filter(
#     #     models.Post.title.contains(search)).limit(limit).offset(skip).all()

#     posts = db.query(models.Post, func.count(models.Vote.post_id).label("votes")).join(
#         models.Vote, models.Vote.post_id == models.Post.id, isouter=True).group_by(models.Post.id).filter(models.Post.title.contains(search)).limit(limit).offset(skip).all()
#     return posts


# @router.post("/", status_code=status.HTTP_201_CREATED, response_model=schemas.Post)
# def create_posts(post: schemas.PostCreate, db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):
#     # cursor.execute("""INSERT INTO posts (title, content, published) VALUES (%s, %s, %s) RETURNING * """,
#     #                (post.title, post.content, post.published))
#     # new_post = cursor.fetchone()

#     # conn.commit()

#     new_post = models.Post(owner_id=current_user.id, **post.dict())
#     db.add(new_post)
#     db.commit()
#     db.refresh(new_post)

#     return new_post


# @router.get("/{id}", response_model=schemas.PostOut)
# def get_post(id: int, db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):
#     # cursor.execute("""SELECT * from posts WHERE id = %s """, (str(id),))
#     # post = cursor.fetchone()
#     # post = db.query(models.Post).filter(models.Post.id == id).first()

#     post = db.query(models.Post, func.count(models.Vote.post_id).label("votes")).join(
#         models.Vote, models.Vote.post_id == models.Post.id, isouter=True).group_by(models.Post.id).filter(models.Post.id == id).first()

#     if not post:
#         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
#                             detail=f"post with id: {id} was not found")

#     return post


# @router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
# def delete_post(id: int, db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):

#     # cursor.execute(
#     #     """DELETE FROM posts WHERE id = %s returning *""", (str(id),))
#     # deleted_post = cursor.fetchone()
#     # conn.commit()
#     post_query = db.query(models.Post).filter(models.Post.id == id)

#     post = post_query.first()

#     if post == None:
#         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
#                             detail=f"post with id: {id} does not exist")

#     if post.owner_id != current_user.id:
#         raise HTTPException(status_code=status.HTTP_403_FORBIDDEN,
#                             detail="Not authorized to perform requested action")

#     post_query.delete(synchronize_session=False)
#     db.commit()

#     return Response(status_code=status.HTTP_204_NO_CONTENT)


# @router.put("/{id}", response_model=schemas.Post)
# def update_post(id: int, updated_post: schemas.PostCreate, db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):

#     # cursor.execute("""UPDATE posts SET title = %s, content = %s, published = %s WHERE id = %s RETURNING *""",
#     #                (post.title, post.content, post.published, str(id)))

#     # updated_post = cursor.fetchone()
#     # conn.commit()

#     post_query = db.query(models.Post).filter(models.Post.id == id)

#     post = post_query.first()

#     if post == None:
#         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
#                             detail=f"post with id: {id} does not exist")

#     if post.owner_id != current_user.id:
#         raise HTTPException(status_code=status.HTTP_403_FORBIDDEN,
#                             detail="Not authorized to perform requested action")

#     post_query.update(updated_post.dict(), synchronize_session=False)

#     db.commit()

#     return post_query.first()