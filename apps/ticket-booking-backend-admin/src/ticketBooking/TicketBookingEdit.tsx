import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  BooleanInput,
  TextInput,
} from "react-admin";

export const TicketBookingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="eventDate" source="eventDate" />
        <BooleanInput label="paymentStatus" source="paymentStatus" />
        <TextInput label="timeSlot" source="timeSlot" />
      </SimpleForm>
    </Edit>
  );
};
