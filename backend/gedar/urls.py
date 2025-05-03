from django.contrib import admin
from django.urls import path, include
from django.conf import settings

from rest_framework import permissions, routers

from users.views import UserViewSet
from jobs.views import JobsViewSet
from condidate.views import CondidateViewSet

router = routers.DefaultRouter()
router.register('users', UserViewSet)


router.register('jobs', JobsViewSet)
router.register('condidate', CondidateViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('rest-auth/', include('rest_auth.urls')),
] + router.urls

if settings.DEBUG:
    from django.conf.urls.static import static
    from drf_yasg.views import get_schema_view
    from drf_yasg import openapi

    schema_view = get_schema_view(
        openapi.Info(title="GEDAR API", default_version="v1"),
        public=False,
        permission_classes=(permissions.IsAdminUser,)
    )

    urlpatterns += [
        path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
        path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
