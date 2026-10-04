"use client";
import { SquarePen, Trash2 } from "lucide-react";
import * as S from "./styles";
import { getCategoryIcon } from "@/constants/categoryIcons";
import { Category } from "@/services/category-service";
import { useCategory } from "@/hooks/useCategory";
import { useConfirm } from "@/hooks/useConfirm";
import { BaseModalProps, useModalContext } from "@/contexts/ModalContext";
import { NewCategory } from "@/components/Pages/Configuracoes/Categorias/FormModal";
import { ComponentType, createElement } from "react";

const EditCategoryFormContent = ({
  onClose,
  category,
}: {
  onClose: () => void;
  category: Category;
}) => (
  <NewCategory
    onClose={onClose}
    category={category}
  />
);

export const CategoryInfo = ({ category }: { category: Category }) => {
  const { deleteCategory } = useCategory();
  const { confirm } = useConfirm();
  const { openModal } = useModalContext();

  const handleDelete = () => {
    confirm({
      title: "Excluir categoria",
      message: `Tem certeza que deseja excluir a categoria "${category.name}"? Essa ação não pode ser desfeita.`,
      confirmLabel: "Excluir",
      danger: true,
      onConfirm: () => deleteCategory.mutate({ id: category.id }),
    });
  };

  const handleEdit = () => {
    openModal({
      component:
        EditCategoryFormContent as unknown as ComponentType<BaseModalProps>,
      title: "Editar Categoria",
      props: { category },
    });
  };

  return (
    <S.CategoryWrapper>
      <S.IconWrapper $color={category.color}>
        {createElement(getCategoryIcon(category.icon), { size: 22 })}
      </S.IconWrapper>
      <S.Name>{category.name}</S.Name>
      <S.CategoryActions>
        <SquarePen
          size={28}
          onClick={handleEdit}
        />
        <Trash2
          size={28}
          className="trashIcon"
          onClick={handleDelete}
        />
      </S.CategoryActions>
    </S.CategoryWrapper>
  );
};
