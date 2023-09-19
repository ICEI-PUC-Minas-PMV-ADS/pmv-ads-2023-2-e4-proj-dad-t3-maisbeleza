using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Data.Entity;
using System.Reflection.Emit;
using System.Reflection.Metadata;

namespace MaisBeleza.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            foreach (var relationship in builder.Model.GetEntityTypes()
                .SelectMany(e => e.GetForeignKeys()))
            {
                relationship.DeleteBehavior = DeleteBehavior.Restrict;
            }

            builder.Entity<Agenda>()
            .HasKey(c => new { c.AgendamentoId, c.ServicoId });

            builder.Entity<Agenda>()
                .HasOne(c => c.Agendamento).WithMany(c => c.Servicos)
                .HasForeignKey(c => c.AgendamentoId);

            //builder.Entity<Agenda>()
            //    .HasOne(c => c.Servico).WithMany(c => c.Agendamentos)
            //.HasForeignKey(c => c.ServicoId);
        }


        public DbSet<Agendamento> Agendamentos { get; set; }
        //public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Faturamento> Faturamentos { get; set; }
        //public DbSet<Mei> Meis { get; set; }
        //public DbSet<Servico> Servicos { get; set; }
        public DbSet<Agenda> Agendas { get; set; }
    }
}
