import uuid
from django.utils import timezone
from django.db.models import QuerySet, Manager
from django.db import models

class TimeStampUUIDQuerySet(QuerySet):
    """_summary_
    Definition for TimestampUUIDQuerySet
    Here we  have predesigned queries that allow TImeStampUUIDManager 
    to be able to amange request for typical queries. 
    
    Args:
        QuerySet (_type_): _description_
        Lazily evaluated, soft-delete status retrieval function
        as well as none-delete status retrieval function.
        This allows you to chain these query operations together 
        before executing the query.
    """
    
    def get_soft_deleted_items(self):
        """_summary_
        Here we have the operation allowing the retrieval of
        soft deleted items
        
        Returns:
            __type__: soft deleted items
            List of soft deleted items for retieving
        """
        return self.exclude(deleted_at__isnull=False)

    def get_nondeleted_items(self):
        """_summary_
        Here we have the operation allowing the retrieval of
        nondeleted items
        
        Returns:
            __type__: nondeleted items
            List of nondeleted items for retieving
        """
        return self.exclude(deleted_at__isnull=True)
    

class TimeStampUUIDManager(Manager):
    """_summary_
    Manager definition for TimeStampUUIDManager
    Here we have the get_queryset that will return all the models
    that haven't been deleted or soft deleted. 
    Args:
        Manager (_type_): _description_
        Responsible for handling database operations for the
        model. By defining a custom manager, you can override 
        or extend the default manager's functionality. This way you 
        can retieve all the non-deleted records or soft-deleted records. 
        With the help of the QuerySet created by this manager.
    """
    
    def get_queryset(self):
        """_summary_
         Here we have the setting of the queryset assign the
        data that is access
        Returns:
            _type_: _description_
            TimeStampUUIDQueySet: Here is the TimeStampUUID QuerySet
            object that contains all the indication of
            returned query structures.
        """
        return TimeStampUUIDQuerySet(self.model, using=self._db)

    def get_soft_deleted_items(self):
        """_summary_
        Get the soft deleted items to view for developers.
         Returns:
            _type_: _description_
            Item: List of soft deleted items
        """
        return self.get_queryset().get_soft_deleted_items()

    def get_none_deleted_items(self):
        """_summary_
        Get the none deleted items to view for developers.
         Returns:
            _type_: _description_
            Item: List of none deleted items
        """
        return self.get_queryset().get_nondeleted_items()
    

class TimeStampUUIDModel(models.Model):
    """
    Model definition for TimeStampUUIDModel
    Here we have a model with presets. This will help with not repeating
    the same code over again in each model. From time stamp to softdelete and
    harddelete.
    """

    pkid = models.BigAutoField(primary_key=True, editable=False, help_text="")
    id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(blank=True, null=True, default=None)
    objects = TimeStampUUIDManager()
    all_objects = models.Manager()

    def soft_delete(self):
        self.deleted_at = timezone.now()
        self.save()

    def restore(self):
        self.deleted_at = None
        self.save()

    def hard_delete(self):
        self.delete()


    class Meta:
        abstract = True
        ordering = ["-created_at", "-updated_at"]
