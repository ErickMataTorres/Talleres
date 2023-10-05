using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Talleres.Startup))]
namespace Talleres
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
