"""empty message

Revision ID: 9713bbe0d6eb
Revises: 3f23b6a14366
Create Date: 2024-09-18 11:28:00.869820

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9713bbe0d6eb'
down_revision = '3f23b6a14366'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('is_active', sa.Boolean(), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_column('is_active')

    # ### end Alembic commands ###