export enum BookingStatus {
  Available = "Available",
  Booked = "Booked",
  UnderMaintenance = "Under Maintenance",
  Unavailable = "Unavailable",
}

export const bookingStatuses: { name: BookingStatus }[] = [
  { name: BookingStatus.Available },
  { name: BookingStatus.Booked },
  { name: BookingStatus.UnderMaintenance },
  { name: BookingStatus.Unavailable },
];
