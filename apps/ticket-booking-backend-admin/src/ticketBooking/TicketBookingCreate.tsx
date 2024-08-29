import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  BooleanInput,
  TextInput,
} from "react-admin";

export const TicketBookingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="eventDate" source="eventDate" />
        <BooleanInput label="paymentStatus" source="paymentStatus" />
        <TextInput label="timeSlot" source="timeSlot" />
      </SimpleForm>
    </Create>
  );
};
