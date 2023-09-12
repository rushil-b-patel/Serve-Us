import { Card, CardHeader, CardBody, CardFooter, Typography, Button, } from "@material-tailwind/react";

export default function ServiceCard(service) {
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src={service.image}
          alt={service.name}
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
            {service.name}
        </Typography>
        <Typography>
          {service.description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>See More</Button>
      </CardFooter>
    </Card>
  );
}
