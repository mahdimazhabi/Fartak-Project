import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
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

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
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
