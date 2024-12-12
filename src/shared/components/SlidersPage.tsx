import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

const SlidersPage = () => {
  return (
    <Pagination dir="ltr">
      <PaginationContent>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
          <PaginationLink href="#">2</PaginationLink>
          <PaginationLink href="#">3</PaginationLink>
          <PaginationLink href="#">4</PaginationLink>
          <PaginationLink href="#">5</PaginationLink>
          <PaginationLink href="#">6</PaginationLink>
          <PaginationLink href="#">7</PaginationLink>
          <PaginationLink href="#">8</PaginationLink>
          <PaginationLink href="#">9</PaginationLink>
          <PaginationLink href="#">10</PaginationLink>
          <PaginationLink href="#">11</PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default SlidersPage;
//ltr
