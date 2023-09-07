import { Injectable } from '@nestjs/common';
import { prisma } from './db';

interface Interface {
  company_uen: string;
  company_name: string;
  applicant_name: string;
  applicant_position: string;
  applicant_email: string;
  applicant_mobile: number;
}

@Injectable()
export class AppService {
  async save(data: Interface) {
    return await prisma.health_check.create({
      data: { ...data, applicant_mobile: Number(data.applicant_mobile) },
    });
  }
}
