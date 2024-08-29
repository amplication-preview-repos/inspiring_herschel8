import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const TicketBookingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TicketBookings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="eventDate" source="eventDate" />
        <TextField label="ID" source="id" />
        <BooleanField label="paymentStatus" source="paymentStatus" />
        <TextField label="timeSlot" source="timeSlot" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
