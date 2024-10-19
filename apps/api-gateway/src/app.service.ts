import { Inject, Injectable } from "@nestjs/common";
import { CreaePatientDto } from "./app.dto";
import { ClientKafka } from "@nestjs/microservices";

@Injectable()
export class AppService {
  constructor(
    @Inject("PATIENT_SERVICE")
    private readonly patientProxyClient: ClientKafka
  ) {}
  getHello(): string {
    return "Hello World!";
  }

  async createPatients(payload: CreaePatientDto) {
    // this.patientProxyClient.emit()
  }
}
